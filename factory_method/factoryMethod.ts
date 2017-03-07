namespace FactoryMethodPattern {

    export interface IPerson {
        getName() : String;
    }

    export class Villager implements IPerson {
        getName(): String {
            return "Village Person";
        }
    }

    export class CityPerson implements IPerson {
        getName(): String {
            return "City Person";
        }
    }

    export enum PersonType
    {
        Rural,
        Urban
    }


    export class PersonFactory {

        public static createProduct(type: PersonType) : IPerson {
            if (type === PersonType.Rural) {
                return new Villager();
            } else if (type === PersonType.Urban) {
                return new CityPerson();
            }

            return null;
        }
    }
}
