import { Body, Controller, Get, Param, Post, Put, Request, Response } from '@nestjs/common';
import { AllResponse } from 'src/config/response';
import { WarRoomService } from './war-room.service';
import { WarRoom } from 'src/schemas/war-room.schema';
import { MESSAGES } from 'src/config/messages';

@Controller('war-room')
export class WarRoomController {
    respo: AllResponse;
    constructor(private warroomService: WarRoomService) {
        this.respo = new AllResponse();
    }

    @Post('create')
    async create(@Request() req, @Response() res, @Body() dto: WarRoom) {
        dto.content = JSON.stringify(dto.content);
        let result = await this.warroomService.create(dto);
        return this.respo.successResponse(req, res, result, MESSAGES.CREATE); 
    }
    
    @Get('warroomList')
    async warroomList(@Request() req,  @Response() res) {
        let result = await this.warroomService.findAll();
        this.respo.successResponse(req, res, result, MESSAGES.LIST);
    }

    @Get('getWarRoom/:id')
    async getById(@Request() req, @Response() res, @Param('id') id) {
        let result = await this.warroomService.getWarRoom(id);
        this.respo.successResponse(req, res, result, MESSAGES.DETAIL);
    }

    @Put('update')
    async update(@Request() req, @Response() res, @Body() dto: WarRoom, @Param('id') id) {
        if(dto.content != null){
            dto.content = JSON.stringify(dto.content);
        }
        let result = await this.warroomService.update(id, dto);
        return this.respo.successResponse(req, res, result, MESSAGES.UPDATE); 
    }
}

