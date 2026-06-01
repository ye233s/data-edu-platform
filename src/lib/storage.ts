// 本地存储管理
const STORAGE_KEYS = {
  USER_PROGRESS: 'dataedu_user_progress',
  USER_ACHIEVEMENTS: 'dataedu_user_achievements',
  COMPLETED_CONTENTS: 'dataedu_completed_contents'
}

export interface UserProgress {
  [courseId: string]: {
    [chapterId: string]: {
      completedContents: string[]
      progress: number
    }
  }
}

export interface CompletedContent {
  courseId: string
  chapterId: string
  contentId: string
  completedAt: number
}

// 获取用户进度
export function getUserProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS)
    return data ? JSON.parse(data) : {}
  } catch (e) {
    return {}
  }
}

// 保存用户进度
export function saveUserProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress))
}

// 标记内容完成
export function markContentComplete(
  courseId: string,
  chapterId: string,
  contentId: string
): void {
  const progress = getUserProgress()
  
  if (!progress[courseId]) {
    progress[courseId] = {}
  }
  
  if (!progress[courseId][chapterId]) {
    progress[courseId][chapterId] = {
      completedContents: [],
      progress: 0
    }
  }
  
  const chapterProgress = progress[courseId][chapterId]
  if (!chapterProgress.completedContents.includes(contentId)) {
    chapterProgress.completedContents.push(contentId)
  }
  
  saveUserProgress(progress)
}

// 检查内容是否完成
export function isContentComplete(
  courseId: string,
  chapterId: string,
  contentId: string
): boolean {
  const progress = getUserProgress()
  return progress[courseId]?.[chapterId]?.completedContents.includes(contentId) || false
}

// 获取课程总进度
export function getCourseProgress(courseId: string): number {
  const progress = getUserProgress()
  const courseProgress = progress[courseId]
  if (!courseProgress) return 0
  
  let totalContents = 0
  let completedContents = 0
  
  // 简单估算，实际应该从课程数据计算
  Object.values(courseProgress).forEach(chapter => {
    completedContents += chapter.completedContents.length
  })
  
  // 假设每章平均有3个内容
  const estimatedTotal = Object.keys(courseProgress).length * 3
  totalContents = Math.max(estimatedTotal, completedContents)
  
  return totalContents > 0 ? Math.round((completedContents / totalContents) * 100) : 0
}

// 获取用户成就
export function getUserAchievements(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_ACHIEVEMENTS)
    return data ? JSON.parse(data) : []
  } catch (e) {
    return []
  }
}

// 添加成就
export function addAchievement(achievementId: string): void {
  const achievements = getUserAchievements()
  if (!achievements.includes(achievementId)) {
    achievements.push(achievementId)
    localStorage.setItem(STORAGE_KEYS.USER_ACHIEVEMENTS, JSON.stringify(achievements))
  }
}

// 获取用户学习统计
export function getUserStats() {
  const progress = getUserProgress()
  const achievements = getUserAchievements()
  
  let totalCompleted = 0
  let coursesStarted = 0
  
  Object.values(progress).forEach(course => {
    coursesStarted++
    Object.values(course).forEach(chapter => {
      totalCompleted += chapter.completedContents.length
    })
  })
  
  return {
    coursesStarted,
    totalCompleted,
    achievementsCount: achievements.length,
    learningDays: Math.min(totalCompleted, 7)
  }
}
