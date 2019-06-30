import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTING
import { EventsRoutingModule } from './events-routing.module';

// MATERIAL MODULE
import { AppMaterialModule } from '../app-material.module';

// PROVIDERS
import { EventsProviderService } from './events-provider.service';

// COMPONETNS
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventBookingComponent } from './event-booking/event-booking.component';

@NgModule({
    declarations: [ EventListingComponent, EventBookingComponent ],
    imports: [ CommonModule, EventsRoutingModule, AppMaterialModule ],
    providers: [ EventsProviderService ]
})
export class EventsModule {}
