import React, { Component } from "react";

import {
  EuiButton,
  EuiPopover,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldNumber,
  EuiRange,
  EuiSwitch,
  EuiButtonIcon,
  EuiContextMenuPanel,
  EuiContextMenuItem
} from "@elastic/eui";

import makeId from "@elastic/eui";

export class EuiTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      isSwitchChecked: true,
      isPopover2Open: false,
      isSwitch2Checked: true,
      itemIdToSelectedMap: {},
      itemIdToOpenActionsPopoverMap: {},
      sortedColumn: 'title',
      itemsPerPage: 10,
    };
  }

  onSwitchChange = () => {
    this.setState({
      isSwitchChecked: !this.state.isSwitchChecked
    });
  };

  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen
    });
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false
    });
  };

  onSwitch2Change = () => {
    this.setState({
      isSwitch2Checked: !this.state.isSwitch2Checked
    });
  };

  onButton2Click = () => {
    this.setState({
      isPopover2Open: !this.state.isPopover2Open
    });
  };

  closePopover2 = () => {
    this.setState({
      isPopover2Open: false
    });
  };
  togglePopover0 = itemId => {
    this.setState(previousState => {
      const newItemIdToOpenActionsPopoverMap = {
        ...previousState.itemIdToOpenActionsPopoverMap,
        [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId],
      };

      return {
        itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
      };
    });
  };

  closePopover0 = itemId => {
    // only update the state if this item's popover is open
    if (this.isPopoverOpen(itemId)) {
      this.setState(previousState => {
        const newItemIdToOpenActionsPopoverMap = {
          ...previousState.itemIdToOpenActionsPopoverMap,
          [itemId]: false,
        };

        return {
          itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
        };
      });
    }
  };

  isPopoverOpen = itemId => {
    return this.state.itemIdToOpenActionsPopoverMap[itemId];
  };

  render() {
    const button = (
      <EuiButton
        iconSide="right"
        fill
        iconType="arrowDown"
        onClick={this.onButtonClick}
      >
        Inline form in a popover
      </EuiButton>
    );

    const formSample = (
      <EuiForm>
        <EuiFlexGroup>
          <EuiFlexItem grow={false} style={{ width: 100 }}>
            <EuiFormRow label="Age">
              <EuiFieldNumber max={10} placeholder={42} />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFormRow label="Full name">
              <EuiFieldText icon="user" placeholder="John Doe" />
            </EuiFormRow>
          </EuiFlexItem>
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
                anchorPosition="leftCenter">
                <EuiContextMenuPanel
                  items={[
                    <EuiContextMenuItem
                      key="A"
                      icon="pencil"
                      onClick={() => {
                        this.closePopover0(1);
                      }}>
                      Edit
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="B"
                      icon="share"
                      onClick={() => {
                        this.closePopover0(1);
                      }}>
                      Share
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="C"
                      icon="trash"
                      onClick={() => {
                        this.closePopover0(1);
                      }}>
                      Delete
                    </EuiContextMenuItem>,
                  ]}
                />
              </EuiPopover>
          <EuiFlexItem grow={false}>
            <EuiFormRow hasEmptyLabelSpace>
              <EuiButton>Save</EuiButton>
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiForm>
    );

    const button2 = (
      <EuiButton
        iconSide="right"
        fill
        iconType="arrowDown"
        onClick={this.onButton2Click}
      >
        Vertical form in a popover
      </EuiButton>
    );

    const formSample2 = (
      <EuiForm>
        <EuiFormRow>
          <EuiSwitch
            id={4545}
            name="popswitch"
            label="Isn't this popover form cool?"
            checked={this.state.isSwitch2Checked}
            onChange={this.onSwitch2Change}
          />
        </EuiFormRow>

        <EuiFormRow label="A text field">
          <EuiFieldText name="popfirst" />
        </EuiFormRow>

        <EuiFormRow label="Range" helpText="Some help text for the range">
          <EuiRange min={0} max={100} name="poprange" />
        </EuiFormRow>
        <EuiButton fullWidth>Save</EuiButton>
      </EuiForm>
    );

    return (
      <div>
        <EuiPopover
          id="inlineFormPopover"
          ownFocus
          button={button}
          isOpen={this.state.isPopoverOpen}
          closePopover={this.closePopover.bind(this)}
        >
          <div style={{ width: 500 }}>{formSample}</div>
        </EuiPopover>
        &emsp;
        <EuiPopover
          id="formPopover"
          ownFocus
          button={button2}
          isOpen={this.state.isPopover2Open}
          closePopover={this.closePopover2.bind(this)}
        >
          <div style={{ width: "300px" }}>{formSample2}</div>
        </EuiPopover>
      </div>
    );
  }
}

export default EuiTest;
