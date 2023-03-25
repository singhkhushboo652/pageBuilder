import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PageComponents } from 'src/schemas/page-components.schema';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { PageComponentsService} from 'src/page-components/page-components.service';

@Injectable()
export class PageComponentsSeeder implements Seeder {
  constructor(@InjectModel(PageComponents.name) private readonly pageComponent: Model<PageComponents>) {}

  async seed(): Promise<any> {
    const componentArray = [
        {
            type: "blocks",
            name:"Blocks",
            subType:"blocks"
        },
        {
            type: "layouts",
            name:"Layouts",
            subType:"layouts"
        },
        {
            type: "navigation",
            name:"Navigation",
            subType:"navigation"
        },
        {
            type: "header",
            name:"Headers",
            subType:"header"
        },
        {
            type: "textBox",
            name:"Text Box",
            subType:"textBox"
        },
        {
            type: "galleries",
            name:"Galleries",
            subType:"galleries"
        },
        {
            type: "testimonials",
            name:"Testimonials",
            subType:"testimonials"
        },
        {
            type: "payment",
            name:"Pricing/Payment section",
            subType:"payment"
        },
        {
            type: "button",
            name:"Button",
            subType:"button"
        },
        {
            type: "contact",
            name:"Contact",
            subType:"contact"
        },
        {
            type: "Myassets",
            name:"My assets",
            subType:"Myassets"
        },
        {
            type: "popup",
            name:"Popup",
            subType:"popup"
        },
        {
            type: "animation",
            name:"Animation",
            subType:"animation"
        },
        {
            type: "settings",
            name:"Settings",
            subType:"settings"
        },
        {
            type: "editPanel",
            name:"Edit Panel",
            subType:"editPanel"
        },
        {
            type: "shapes",
            name:"Shapes",
            subType:"shapes"
        }
    ];
    const pageComponentservice = new PageComponentsService(this.pageComponent)
    const work = componentArray
        .map(dto => pageComponentservice.create(dto as PageComponents)
            .then(r => (console.log('done ->', r.name), r))
            .catch(err => (console.log("error while create page component seed ", err.message)))
        );

    return await Promise.all(work);
  }

  async drop(): Promise<any> {
    return this.pageComponent.deleteMany({});
  }
}