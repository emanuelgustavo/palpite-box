import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';

import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('11EEeWvOAf55K12kKY1jcz5Byz_OdhHyOcIMvYILP2j4');

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[1];
        const data = JSON.parse(req.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A3:B3');

        const enablePromotion = sheetConfig.getCell(2, 0);
        const promotionText = sheetConfig.getCell(2, 1);

        let Cupom = '';
        let Promo = '';

        if (enablePromotion.value) {
            //TODO generate cupon
            Cupom = 'temporario';
            Promo = promotionText.value;
        };

        await sheet.addRow({
            Nome: data.nome,
            Email: data.email,
            Whatsapp: data.whatsapp,
            Cupom,
            Promo,
            DataPesquisa: moment.format('LLL'),
            Nota: 5
        });

        res.end(req.body);
    } catch (error) {
        console.log(error);
        res.end(error);
    }
}