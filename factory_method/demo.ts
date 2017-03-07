/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show() : void {
		    var villager: IPerson = PersonFactory.createProduct(PersonType.Rural);
		    var cityPerson: IPerson = FactoryMethodPattern.PersonFactory.createProduct(PersonType.Urban);

		    console.log(villager.getName());
		    console.log(cityPerson.getName());
		};
	}
}

