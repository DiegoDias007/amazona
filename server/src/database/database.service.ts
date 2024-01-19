import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    await this.populateDatabase();
  }

  async populateDatabase() {
    
    if (process.env.POPULATE_DATABASE === 'false') {
      return
    }

    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

    for (const product of data) {
      if (product.image) {
        product.images = [product.image];
      }

      await this.product.create({
        data: {
          name: product.title || "",
          price: product.price || 0,
          description: product.description || "",
          images: product.images || [],
          category: product.category.name || "Uncategorized",
          rating: 0,
        },
      });
    }

    console.log('Database populated successfully.');
  }
}