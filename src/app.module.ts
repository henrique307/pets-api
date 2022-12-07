import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { petsModule } from './Pets/pets.module';
import { mongoConnection } from './config/mongooseConfig';
import { DonosModule } from './donos/donos.module';

@Module({
  imports: [
    petsModule,
    mongoConnection(),
    DonosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
