import { environment } from 'src/environments/environment';

export const microApps : any = {
    'content-micro-ui': {
        name: 'content-micro-ui',
        path: `${environment.microFrontEnds.contentMicro.url}/main.js`,
        cssPath: `${environment.microFrontEnds.contentMicro.url}/styles.js`
    },
    'main-micro-ui': {
        name: 'main-micro-ui',
        path: `${environment.microFrontEnds.mainMicro.url}/main.js`,
        cssPath: `${environment.microFrontEnds.mainMicro.url}/styles.js`
    }
}