import { SES } from 'aws-sdk';
import { SendEmailRequest } from 'aws-sdk/clients/ses';
import Contestant from '../models/contestant';

const SESConfig = {
  region: 'ap-southeast-2'
}

const ses = new SES(SESConfig);

let emailText = (contestant: Contestant, score: number): string => {
  return `Terima kasih ${contestant.name} telah ikutan quiz mclair. \n\n
    score kamu ${score} dengan nomor id kamu ${contestant.id} \n\n
    jangan lupa subscribe supaya hadiahnya semakin besar \n\n
    pengumuman pemenang di episode mclair lifestyle selanjutnya.`
}

let params = (contestant: Contestant, score: number): SendEmailRequest => {
  return {
    Source: 'contact@mclair.id',
    Destination: {
        ToAddresses: [
          contestant.email
        ]
    },
    Message: {
        Subject: {
            Data: 'quiz mclair',
            Charset: 'UTF-8'
        },
        Body: {
            Text: {
                Data: emailText(contestant, score),
                Charset: 'UTF-8'
            },
        }
    }
  }
}

export const sendEmail = async (contestant: Contestant, score: number) => {
  const data = await ses.sendEmail(params(contestant, score)).promise()
  return data
}