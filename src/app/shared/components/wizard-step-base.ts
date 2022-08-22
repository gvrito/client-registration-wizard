import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DROPDOWNS, ROUTES } from '../core/constants';
import { FormService } from '../services/form.service';

export class WizardStepBase {
    public form: FormGroup = new FormGroup({});
    public dropdowns = DROPDOWNS;
    private subscription = new Subscription();

    constructor(
        route: ActivatedRoute,
        private formService: FormService
    ) {
        this.subscription.add(
            route.url.subscribe((urlsegment) => {
                this.initForm(urlsegment[0].path);
            })
        );
    }

    private initForm(str: string): void {
        switch (str) {
            case ROUTES.client:
                this.form = this.formService.clientStepForm;
                break;
            case ROUTES.address:
                this.form = this.formService.addressStepForm;
                break;
            case ROUTES.identity:
                this.form = this.formService.identityStepForm;
                break;
        }
    }

}