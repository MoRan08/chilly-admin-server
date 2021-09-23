import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from 'midwayjs-cool-core';
import { MaterialCategoryEntity } from '../../entity/category';
/**
 * 分类
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MaterialCategoryEntity,
})
export class aterialCategoryController extends BaseController {}
