import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Place } from 'src/entity/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
  ) {
    this.initList();
  }

  findOne(id: number): Promise<Place> {
    return this.placeRepository.findOneBy({ id });
  }

  findAll(): Promise<Place[]> {
    return this.placeRepository.find({
      order: { num: 'ASC' },
    });
  }

  saveOne(place: Place): Promise<Place> {
    return this.placeRepository.save(place);
  }

  saveAll(places: Place[]): Promise<Place[]> {
    return this.placeRepository.save(places);
  }

  updateLock(place: Place, toLock: boolean): Promise<Place> {
    place.isLock = toLock;
    return this.saveOne(place);
  }

  initList(): void {
    this.findAll().then((data) => {
      if (data == null || data.length === 0) {
        const places: Place[] = Array(20)
          .fill(null)
          .map(() => new Place());
        let cpt = 1;
        places.forEach((place) => {
          place.num = cpt;
          place.isLock = false;
          cpt++;
        });
        this.saveAll(places);
      }
    });
  }
}
