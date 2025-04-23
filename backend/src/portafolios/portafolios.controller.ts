import { Controller, Get } from '@nestjs/common';


import { PortfolioService } from './portafolios.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(
    private readonly portfolioService: PortfolioService,
   
  ) {}

  @Get()
  getPortfolio() {
  
    return this.portfolioService.getPortfolio();
  }
}
