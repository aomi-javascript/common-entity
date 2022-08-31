/**
 * 基础实体类
 */
export class AbstractEntity {
  get id(): string {
    return (this as any)._id;
  }

  set id(id: string) {
    (this as any)._id = id;
  }
}
