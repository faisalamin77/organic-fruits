import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataApiService } from '../../services/data-api.service';
import * as sampleData from '../../services/sample-data';
import { FeaturedPlaylistComponent } from './featured-playlist.component';

@Component({
  selector: 'app-grid',
  template: '<p>Mock Grid Component</p>'
})
class MockGridComponent {
  @Input() columnDefs: any[];
  @Input() data: any[];
}

describe('FeaturedPlaylistComponent', () => {
  let component: FeaturedPlaylistComponent;
  let fixture: ComponentFixture<FeaturedPlaylistComponent>;
  let mockDataApiService: any;

  beforeEach(async () => {
    mockDataApiService = jasmine.createSpyObj([
      'getFeaturedPlaylist'
    ]);

    mockDataApiService.getFeaturedPlaylist.and.callFake(() => {
      const data = sampleData.data;
      return of(data);
    });

    await TestBed.configureTestingModule({
      declarations: [ FeaturedPlaylistComponent, MockGridComponent ],
      providers: [
        { provide: DataApiService, useValue: mockDataApiService }
      ]
    })
    .compileComponents();

    component = new FeaturedPlaylistComponent(mockDataApiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should load the `playlistContents`', () => {
    component.playlistContents.subscribe(d => {
      expect(component.pageTitle).toEqual('Featured Playlists');
      expect(d).toEqual(sampleData.data.featuredPlaylists.content);
    });
  });
});
