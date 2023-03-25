import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { PageComponents, PageComponentsSchema } from "./schemas/page-components.schema";
import { PageComponentsSeeder } from "./seeders/page-components.seeder";

seeder({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/madfunnel"),
    MongooseModule.forFeature([{ name: PageComponents.name, schema: PageComponentsSchema }]),
  ],
}).run([PageComponentsSeeder]);