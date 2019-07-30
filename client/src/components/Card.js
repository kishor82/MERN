import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Badge, CardText, CardBody } from "reactstrap";
import "../Bootswatch.css";
import {
  EuiPopover,
  EuiButtonIcon,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiSpacer
} from "@elastic/eui";

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      isSwitchChecked: true,
      isPopover2Open: false,
      isSwitch2Checked: true,
      itemIdToSelectedMap: {},
      itemIdToOpenActionsPopoverMap: {},
      sortedColumn: "title",
      itemsPerPage: 10
    };
  }
  togglePopover0 = itemId => {
    this.setState(previousState => {
      const newItemIdToOpenActionsPopoverMap = {
        ...previousState.itemIdToOpenActionsPopoverMap,
        [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId]
      };

      return {
        itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap
      };
    });
  };

  closePopover0 = itemId => {
    // only update the state if this item's popover is open
    if (this.isPopoverOpen(itemId)) {
      this.setState(previousState => {
        const newItemIdToOpenActionsPopoverMap = {
          ...previousState.itemIdToOpenActionsPopoverMap,
          [itemId]: false
        };

        return {
          itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap
        };
      });
    }
  };

  isPopoverOpen = itemId => {
    return this.state.itemIdToOpenActionsPopoverMap[itemId];
  };

  render() {
    const cardBody = {
      maxWidth: "30rem",
      boxShadow: "0 0 15px 2px rgba(0,0,0,.15)"
    };
    const cardText = {
      whiteSpace: "pre-wrap",
      fontWeight: 700
    };
    const cardTime = {
      color: "#aaa",
      fontSize: "12px"
    };
    const badge = {
      float: "right"
    };
    return (
      <div className="card mb-4 border-0" style={cardBody}>
        <div ClassName="btn-block">
          <span class=" badge badge-pill badge-danger rounded">random feeling</span>
          <div style={badge}>
        <EuiPopover
          id={`${1}-actions`}
          button={
            <EuiButtonIcon
              aria-label="Actions"
              iconType="gear"
              size="s"
              color="text"
              onClick={() => this.togglePopover0(1)}
            />
          }
          isOpen={this.isPopoverOpen(1)}
          closePopover={() => this.closePopover0(1)}
          panelPaddingSize="none"
          anchorPosition="leftCenter"
        >
          <EuiContextMenuPanel
            items={[
              <EuiContextMenuItem
                key="A"
                icon="pencil"
                onClick={() => {
                  this.closePopover0(1);
                }}
              >
                Edit
              </EuiContextMenuItem>,
              <EuiContextMenuItem
                key="B"
                icon="share"
                onClick={() => {
                  this.closePopover0(1);
                }}
              >
                Share
              </EuiContextMenuItem>,
              <EuiContextMenuItem
                key="C"
                icon="trash"
                onClick={() => {
                  this.closePopover0(1);
                }}
              >
                Delete
              </EuiContextMenuItem>
            ]}
          />
        </EuiPopover>
        </div>
        </div>
      
        <CardBody>
          <CardText style={cardText}>
            "Tsting Something to working on ittttt........ kisho fsd sdkmv
            svmsdk vmslk k mkvla sdv sa valksdv naslk nl a vksdl av makls
            mavsdv"
          </CardText>
          <EuiSpacer size="m" />
          <div style={cardTime}>
            <FontAwesomeIcon icon={faClock} />
              {" "}date here{" "}
          </div>
        </CardBody>
      </div>
    );
  }
}

export default Card;
