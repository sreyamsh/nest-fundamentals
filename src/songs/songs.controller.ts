import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDTO } from "./dto/create-song-dto";

@Controller("songs")
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(@Body() createSong: CreateSongDTO) {
    return this.songService.create(createSong);
  }
  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Get(":id")
  findOne() {
    return "fetch song based on ID";
  }
  @Put(":id")
  update() {
    return "update song based on ID";
  }
  @Get(":id")
  delete() {
    return "delete song based on ID";
  }
}
