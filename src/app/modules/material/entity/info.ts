import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column } from 'typeorm';

/**
 * 素材详情
 */
@EntityModel('material_sys_info')
export class MaterialInfoEntity extends BaseEntity {
  @Column({ comment: '素材标题' })
  material_title: string;

  @Column({ comment: '素材描述', nullable: true })
  material_des: string;

  @Column({ comment: '素材地址' })
  location: string;

  @Column({ comment: '素材外链', nullable: true })
  outside_chain: string;

  @Column({ comment: '上传者' })
  uploader: string;

  @Column({ comment: '排序', default: 0 })
  sort: number;

  @Column({ comment: '分类ID' })
  category_id: number;

  @Column({ comment: '状态 0:禁用 1：启用', default: 1, type: 'tinyint' })
  status: number;
}
