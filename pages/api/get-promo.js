import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('11EEeWvOAf55K12kKY1jcz5Byz_OdhHyOcIMvYILP2j4');

export default async(req, res) => {
    
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells('A3:B3');

        const enablePromotion = sheet.getCell(2, 0);
        const promotionText = sheet.getCell(2, 1);

        res.end(JSON.stringify({
            promoActivate: enablePromotion.value,
            message: promotionText.value
        }));

    } catch (error) {
        res.end(JSON.stringify({
            promoActivate: false,
            message: ''
        }));

    }    
};