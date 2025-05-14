import React from 'react';
import { getIconByName } from '../constants/iconMappings';
export var SkillIcon = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 24 : _b, color = _a.color, customIcon = _a.customIcon, className = _a.className, _c = _a.showLabel, showLabel = _c === void 0 ? true : _c, _d = _a.labelClassName, labelClassName = _d === void 0 ? '' : _d, _e = _a.textSize, textSize = _e === void 0 ? 'xs' : _e;
    var mapping = getIconByName(name);
    var Icon = customIcon || (mapping === null || mapping === void 0 ? void 0 : mapping.icon);
    if (!Icon) {
        console.warn("Icon not found for skill: ".concat(name));
        return null;
    }
    return (<div className={"flex flex-col items-center ".concat(className)}>
      <Icon size={size} color={color}/>
      {showLabel && (<span className={"mt-2 text-".concat(textSize, " ").concat(labelClassName)}>{name}</span>)}
    </div>);
};
//# sourceMappingURL=SkillIcon.jsx.map