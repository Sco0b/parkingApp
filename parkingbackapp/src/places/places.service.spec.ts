import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/app.controller';
import { Place } from 'src/entity/place.entity';
import { PlacesService } from './places.service';

describe('PlacesServiceTest', () => {
  let placesService: PlacesService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppController],
    }).compile();

    placesService = app.get<PlacesService>(PlacesService);
  });

  describe('findAll', () => {
    it('should return list of 20 places from 1 to 20', async () => {
      expect(await placesService.findAll()).toHaveLength(20);
    });
  });

  describe('findOne', () => {
    it('should return place 1 empty', async () => {
      const result = await placesService.findOne(1);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Place);
      expect(result.id).toBe(1);
    });
  });

  describe('updateLock', () => {
    it('should return place 1 locked', async () => {
      const place = await placesService.findOne(1);
      const result = await placesService.updateLock(place, !place.isLock);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Place);
      expect(result.id).toBe(1);
      expect(result.isLock).toBe(!place.isLock);
    });
  });
});
