import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PageComponents } from 'src/schemas/page-components.schema';

@Injectable()
export class PageComponentsService {
    constructor(@InjectModel(PageComponents.name) private readonly pageComponent: Model<PageComponents>) {}

    async create(dto: PageComponents): Promise<PageComponents> {
        const createPageComponent = new this.pageComponent(dto);
        return createPageComponent.save();
    }

    async findAll(): Promise<PageComponents[]> {
        return this.pageComponent.find().exec();
    }
}
