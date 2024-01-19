import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async getAllProducts() {
    const products = await this.prisma.product.findMany()
    return products
  }

  async getSingleProduct(id: string) {
    const product = await this.prisma.product.findUnique({where: { id }})
    return product
  }
}
