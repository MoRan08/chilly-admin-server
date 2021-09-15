import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('material_sys_category')
export class MaterialCategoryEntity extends BaseEntity {
  @Column({ comment: '描述' })
  xxx: string;
}
