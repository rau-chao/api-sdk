export * from './account.service';
import { AccountApiService } from './account.service';
export * from './basic-error-controller.service';
import { BasicErrorControllerApiService } from './basic-error-controller.service';
export * from './operation-handler.service';
import { OperationHandlerApiService } from './operation-handler.service';
export * from './web-mvc-links-handler.service';
import { WebMvcLinksHandlerApiService } from './web-mvc-links-handler.service';
export const APIS = [AccountApiService, BasicErrorControllerApiService, OperationHandlerApiService, WebMvcLinksHandlerApiService];
