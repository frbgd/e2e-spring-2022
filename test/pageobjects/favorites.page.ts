import Page from './page';
import {URL} from '../../constants';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FavoritesPage extends Page {

    public getTrackImg(trackId: number) {
        return $(`img[data-id="${trackId}"]`);
    }

    public async getTrack(trackId: number) {
        await this.getTrackImg(trackId).waitForDisplayed();
        return this.getTrackImg(trackId);
    }

    public open () {
        return super.open('favorites');
    }
}

export default new FavoritesPage(URL);
