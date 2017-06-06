import * as React from "react";
import {getUsers, getRooms} from "./RestStore";
import {User} from "../model/User";
import {Room} from "../model/Room";

export interface UserViewProps {
    user: User;
}

export default class UserView extends React.Component<UserViewProps, undefined> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="app">
            {this.props.user.name}
        </div>;
    }
}
