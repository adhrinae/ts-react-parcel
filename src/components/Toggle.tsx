import * as React from "react";
import { SwitchProps } from "./Switch";
import { compose } from "../utilities/compose";

interface TogglerProps {
  on: boolean | undefined;
  toggle(): void;
  reset(): void;
  getTogglerProps(options?: SwitchProps): SwitchProps;
}

interface ToggleProps {
  defaultOn?: boolean;
  on?: boolean | undefined;
  onToggle(on: boolean | undefined): void;
  onReset(on: boolean | undefined): void;
  render(toggle: TogglerProps): JSX.Element;
}

interface ToggleState {
  on: boolean | undefined;
}

export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  public static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {},
  };

  private initialState: ToggleState = { on: this.props.defaultOn };

  constructor(props: ToggleProps) {
    super(props);
    this.state = this.initialState;
    this._toggle = this._toggle.bind(this);
    this._reset = this._reset.bind(this);
    this._getTogglerProps = this._getTogglerProps.bind(this);
  }

  public render(): JSX.Element {
    return this.props.render({
      on: this._isOnControlled() ? this.props.on : this.state.on,
      toggle: this._toggle,
      reset: this._reset,
      getTogglerProps: this._getTogglerProps,
    });
  }

  private _toggle(): void {
    const { on, onToggle } = this.props;
    if (this._isOnControlled()) {
      onToggle(!on);
    } else {
      this.setState(({ on }) => ({ on: !on }), () => onToggle(this.state.on));
    }
  }

  private _reset(): void {
    const { on, onReset } = this.props;
    if (this._isOnControlled()) {
      onReset(!on);
    } else {
      this.setState(this.initialState, () => onReset(this.state.on));
    }
  }

  private _getTogglerProps({ onClick, ...props }: SwitchProps = {}): SwitchProps {
    return {
      onClick: compose(onClick, this._toggle),
      ...props,
    };
  }

  private _isOnControlled(): boolean {
    return this.props.on !== undefined;
  }
}
