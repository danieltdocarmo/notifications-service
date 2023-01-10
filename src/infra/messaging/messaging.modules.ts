import { Module } from "@nestjs/common";
import { SendNotification } from "src/application/use-cases/send-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificatiosController } from "./kafka/controllers/notifications.controler";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        KafkaConsumerService,
        SendNotification
    ],
    controllers: [
        NotificatiosController
    ]
})
export class MessagingModule{}
