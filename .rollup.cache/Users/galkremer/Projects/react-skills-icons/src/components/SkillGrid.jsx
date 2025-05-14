import React from 'react';
import { SkillIcon } from './SkillIcon';
export var SkillGrid = function (_a) {
    var skills = _a.skills, _b = _a.columns, columns = _b === void 0 ? 3 : _b, _c = _a.gap, gap = _c === void 0 ? 4 : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (<div className={"grid ".concat(className)} style={{
            gap: "".concat(gap * 0.25, "rem"),
            gridTemplateColumns: "repeat(".concat(columns, ", minmax(0, 1fr))"),
        }}>
      {skills.map(function (skill) { return (<SkillIcon key={skill.name} {...skill}/>); })}
    </div>);
};
//# sourceMappingURL=SkillGrid.jsx.map