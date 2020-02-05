/**
 * @flow
 */

let ChineseMap = new Map()
ChineseMap.set("templates", "模版")
ChineseMap.set("profile", "基本资料")
ChineseMap.set("education", "教育")
ChineseMap.set("work", "工作经历")
ChineseMap.set("skills", "技能列表")
ChineseMap.set("projects", "项目经验")
ChineseMap.set("awards", "奖项")

function titleCase(str: string): string {
    return ChineseMap.get(str)
}

export { titleCase }
