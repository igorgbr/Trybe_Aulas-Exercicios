import React from 'react';

class PokeProfile extends React.Component {
    render() {
        // const {name, type, averageWeight: { value, meassureUnit},
        // image,
        // } = this.props.pokemon;

        return (
            <div className="provisoria">
                <div className="screen-poke">
                    <img src={this.props.cat.image} />
                </div>
                <div className="data-padding">
                    <div className="data">
                        <p> Nome: {this.props.cat.name} </p>
                        <p> Type: {this.props.cat.type} </p>
                        <p> Peso Médio: {this.props.cat.averageWeight.value} {this.props.cat.averageWeight.measurementUnit}</p>
                    </div>
                </div>

            </div>

        );
    }

}

export default PokeProfile;