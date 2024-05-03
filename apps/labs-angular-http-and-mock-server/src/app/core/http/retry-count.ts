import { HttpContextToken } from '@angular/common/http';

export const RETRY_COUNT = new HttpContextToken(() => 3);
