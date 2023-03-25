import { Controller, Get, Request, Response } from '@nestjs/common';
import { AllResponse } from 'src/config/response';
import { PageComponentsService } from './page-components.service';

@Controller('page-components')
export class PageComponentsController {
    respo: AllResponse;
    constructor(private pagecomponentsService: PageComponentsService) {
        this.respo = new AllResponse();
    }

    @Get('componentList')
    async componentList(@Request() req,  @Response() res) {
        let result = await this.pagecomponentsService.findAll();
        this.respo.successResponse(req, res, result, 'Component list');
    }
}
