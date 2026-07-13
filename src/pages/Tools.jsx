import { useState, useEffect } from 'react';

function PackingChecklist() {
  const categories = {
    '📄 重要文件': ['护照 + 复印件', 'CAS 确认函', '签证/BRP 领取信', '雅思成绩单', '学历学位证书', '体检证明', '护照照片若干', '住宿合同/确认函'],
    '👔 衣物': ['保暖外套（秋冬必备）', '防水冲锋衣', '正装一套', '日常便装 3-5 套', '内衣袜子多备', '拖鞋 + 运动鞋'],
    '💊 药品': ['感冒药', '肠胃药', '过敏药', '创可贴/消毒用品', '个人常用处方药', '体温计'],
    '🔌 电子产品': ['笔记本电脑 + 充电器', '手机 + 充电器', '转换插头（英标）x2', '排插', '移动电源', 'U盘/移动硬盘'],
    '🧴 日用品': ['洗漱用品旅行装', '毛巾', '床上用品（可到英再买）', '眼镜/隐形眼镜多备', '雨伞'],
  };

  const [checked, setChecked] = useState({});

  const toggle = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const totalItems = Object.values(categories).flat().length;
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">🎒 行李清单</h3>
        <span className="text-sm text-text-secondary">
          已完成 {checkedCount}/{totalItems}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%` }}
        />
      </div>
      {Object.entries(categories).map(([cat, items]) => (
        <div key={cat} className="mb-4">
          <h4 className="font-medium text-sm text-text-secondary mb-2">{cat}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {items.map((item) => (
              <label
                key={item}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors text-sm
                  ${checked[item] ? 'bg-green-50 line-through text-gray-400' : 'hover:bg-gray-50'}`}
              >
                <input
                  type="checkbox"
                  checked={!!checked[item]}
                  onChange={() => toggle(item)}
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Tools() {
  useEffect(() => { document.title = '实用工具 - 原心咯的英国留学指南'; }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">🛠️ 实用工具</h1>
      <p className="text-text-secondary mb-8">
        留学生活常用的实用小工具，陆续添加中。
      </p>

      <PackingChecklist />
    </div>
  );
}
