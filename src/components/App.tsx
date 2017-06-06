import * as React from "react";
import {getUsers, getRooms} from "./RestStore";
import {User} from "../model/User";
import {Room} from "../model/Room";
import UserView from "./User";

require("!style-loader!css-loader!sass-loader!./App.scss");

const reactLogo = require("./react_logo.svg");

export interface AppState {
    users: Array<User>;
    rooms: Array<Room>;
}

export default class App extends React.Component<undefined, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            rooms: []
        };
    }

    componentDidMount() {
        getUsers().then(users => this.setState({"users": users}));
        getRooms().then(rooms => this.setState({"rooms": rooms}));
    }

    render() {
        let users = this.state.users.map(user => {
           return <UserView
               user={user}
           />;
        });

        return <div className="app">
            <h1>WG/Rechner</h1>
            {users}
        </div>;
    }
}
