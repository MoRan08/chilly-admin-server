import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from 'midwayjs-cool-core';
import { MaterialInfoEntity } from '../../entity/info';

/**
 * 素材详情
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MaterialInfoEntity,
})
export class MaterialInfoController extends BaseController {}
