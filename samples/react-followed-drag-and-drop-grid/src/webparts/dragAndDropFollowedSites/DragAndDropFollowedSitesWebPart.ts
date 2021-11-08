import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'DragAndDropFollowedSitesWebPartStrings';
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import DragAndDropFollowedSites from './components/DragAndDropFollowedSites';
import { IDragAndDropFollowedSitesProps } from './components/IDragAndDropFollowedSitesProps';
import { IDragAndDropFollowedSitesWebPartProps } from './IDragAndDropFollowedSitesWebPartProps';

export default class DragAndDropFollowedSitesWebPart extends BaseClientSideWebPart<IDragAndDropFollowedSitesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDragAndDropFollowedSitesProps> = React.createElement(
      DragAndDropFollowedSites, 
      {
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
          ]
        }
      ]
    };
  }
}
