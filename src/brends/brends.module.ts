import { Module } from '@nestjs/common';
import { BrendsService } from './brends.service';

@Module({
  providers: [BrendsService]
})
export class BrendsModule {}
