import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column, Index } from 'typeorm';

/**
 * 素材分类
 */
@EntityModel('material_sys_category')
export class MaterialCategoryEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '分类名称' })
  name: string;

  @Column({
    comment: '类型 0：图片 1：视频 2：文档 3：其他',
    default: 0,
    type: 'tinyint',
  })
  type: string;

  @Column({ comment: '排序', nullable: true, default: 0 })
  sort: string;

  @Column({ comment: '该类别下素材数量', nullable: true })
  article_count: string;

  @Column({ comment: '尺寸参数', nullable: true })
  px: string;

  @Column({ comment: '大小限制', nullable: true })
  kb: string;

  @Column({ comment: '备注', length: 50, nullable: true })
  remark: string;

  @Column({ comment: '状态 0:禁用 1：启用', default: 1, type: 'tinyint' })
  status: number;
}
