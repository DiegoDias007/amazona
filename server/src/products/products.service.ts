import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async getAllProducts() {
    const products = await this.prisma.product.findMany()
    const simplifiedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.images[0]
    })) 
    return simplifiedProducts
  }

  async getSingleProduct(id: string) {
    const product = await this.prisma.product.findUnique({where: { id }})
    const simplifiedProduct = {
      ...product,
      image: product.images[0]
    }
    delete simplifiedProduct.images
    
    return simplifiedProduct
  }
}
