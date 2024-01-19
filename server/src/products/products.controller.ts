import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts()
  }

  @Get(":id")
  async getSingleProduct(@Param("id", ParseUUIDPipe) id: string) {
    return await this.productsService.getSingleProduct(id);
  }
}
