import { Module } from '@nestjs/common';
import { PageComponentsService } from './page-components.service';
import { PageComponentsController } from './page-components.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PageComponents, PageComponentsSchema } from 'src/schemas/page-components.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PageComponents.name, schema: PageComponentsSchema}])
  ],
  providers: [PageComponentsService],
  controllers: [PageComponentsController]
})
export class PageComponentsModule {}
