"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const session_controller_1 = require("./session.controller");
const session_service_1 = require("./session.service");
const session_providers_1 = require("./session.providers");
const database_module_1 = require("../Shared/DataBase/database.module");
const questionnaireAnswer_providers_1 = require("../QuestionnaireAnswer/questionnaireAnswer.providers");
let SessionModule = class SessionModule {
};
SessionModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule
        ],
        components: [
            session_providers_1.sessionProvider,
            session_service_1.SessionService,
            questionnaireAnswer_providers_1.questionnaireAnserProvider
        ],
        controllers: [
            session_controller_1.SessionController
        ]
    })
], SessionModule);
exports.SessionModule = SessionModule;
//# sourceMappingURL=session.module.js.map