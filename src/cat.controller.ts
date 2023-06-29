import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller('cat')
export class CatController {
    @Get()
    findAll(): string{
        return "달퐁이 냥냥"
    }
}