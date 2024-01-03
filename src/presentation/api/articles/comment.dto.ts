// comment.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  @ApiProperty()
  content: string;

  toEntity = () => ({
    content: this.content,
  });
}
