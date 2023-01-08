import { Module } from "@nestjs/common";
import { CancelNotification } from "src/application/use-cases/cancel-notification";
import { CoutNotificationByRecipientId } from "src/application/use-cases/cout-notifications-by-recipient";
import { GetManyNotificationsByRecipientId } from "src/application/use-cases/get-notifications-by-recipient-id";
import { ReadNotification } from "src/application/use-cases/read-notification";
import { SendNotification } from "src/application/use-cases/send-notification";
import { UnreadNotification } from "src/application/use-cases/unread-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controller/notifications.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification,
        CancelNotification,
        ReadNotification,
        UnreadNotification,
        GetManyNotificationsByRecipientId,
        CoutNotificationByRecipientId]
})
export class HttpModule { }