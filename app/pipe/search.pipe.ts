import {Pipe} from "@angular/core";

@Pipe({
	name: "find"
})

export class SearchPipe{
	transform(pipeData, [pipeModifier]){
		return pipeData.filter((eachItem)=>{
			return eachItem['fullname'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
					eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
		});
	}
}