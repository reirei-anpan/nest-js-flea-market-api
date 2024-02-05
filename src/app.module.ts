import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

//Feature modules を読み込むためのMain module
@Module({
  //モジュール内部で必要な外部モジュールをインポートする
  imports: [ItemsModule],
  //@Controllerデコレータがついたクラスを記述する
  controllers: [],
  //@Injectableデコレータがついたクラスを記述する
  providers: [],
})
export class AppModule {}
