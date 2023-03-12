import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Place } from 'src/entity/place.entity';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get('/all')
  async getAll(@Res() response): Promise<Place[]> {
    const places = await this.placesService.findAll();
    return response.status(HttpStatus.OK).json({
      places,
    });
  }

  @Get('/one/:id')
  async get(
    @Res() response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Place> {
    const place = await this.placesService.findOne(id);
    return response.status(HttpStatus.OK).json({
      place,
    });
  }

  @Put('/all')
  async updateAll(
    @Res() response,
    @Body() placesToUpdate: Place[],
  ): Promise<Place> {
    const places = await this.placesService.saveAll(placesToUpdate);
    return response.status(HttpStatus.OK).json({
      places,
    });
  }

  @Put('/one')
  async update(@Res() response, @Body() placeToUpdate: Place): Promise<Place> {
    const place = await this.placesService.saveOne(placeToUpdate);
    return response.status(HttpStatus.OK).json({
      place,
    });
  }

  @Post('/lock/:toLock')
  async updateLock(
    @Res() response,
    @Param('toLock', ParseBoolPipe) toLock: boolean,
    @Body() placeToUpdate: Place,
  ): Promise<Place> {
    const place = await this.placesService.updateLock(placeToUpdate, toLock);
    return response.status(HttpStatus.OK).json({
      place,
    });
  }
}
